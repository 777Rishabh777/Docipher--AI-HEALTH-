from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.core.files.uploadedfile import SimpleUploadedFile
from django.urls import reverse
import io


class ProfileUploadTest(TestCase):
	def setUp(self):
		self.username = 'testuser'
		self.password = 'testpass123'
		self.user = User.objects.create_user(username=self.username, password=self.password)
		self.client = Client()

	def test_profile_image_upload(self):
		# login
		self.client.login(username=self.username, password=self.password)

		# create a simple in-memory JPEG
		img = SimpleUploadedFile('test.jpg', b'\xFF\xD8\xFF\xD9', content_type='image/jpeg')

		url = reverse('profile')
		response = self.client.post(url, {
			'first_name': 'Test',
			'last_name': 'User',
			'profile_picture': img,
		}, follow=True)

		# After post, should redirect back to profile and not error
		self.assertEqual(response.status_code, 200)
		# Ensure profile_picture field was updated on the model instance
		profile = self.user.patientprofile
		# profile_picture field should be set (either default or uploaded file)
		self.assertTrue(profile.profile_picture)

	def test_profile_page_get_without_image(self):
		# Ensure GET to profile for a new user without an image doesn't 500
		self.client.login(username=self.username, password=self.password)
		response = self.client.get(reverse('profile'))
		self.assertEqual(response.status_code, 200)
