from django.db import models


class UserProfile(models.Model):

    id = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=200, blank=True, default="")
    lastName = models.CharField(max_length=200, blank=True, default="")
    email_id = models.CharField(max_length=200, null=False)
    address = models.CharField(max_length=500, blank=True, default="")
    password = models.CharField(max_length=200, blank=True, default="")
    role = models.CharField(max_length=10, choices=(('dogowner','DOGOWNER'),('dogsitter','DOGSITTER') ), blank=True, default="")


    def __str__(self):
        """A string representation of the model."""
        return self.email_id


class UserStatus(models.Model):

    user_status_id = models.AutoField(primary_key=True)

    status = models.CharField(max_length=200, null=False)
    updated_time = models.DateTimeField(auto_now=True, auto_now_add=False)
    user_id = models.ForeignKey(UserProfile, related_name='user', null=False,on_delete=models.CASCADE)
    is_active = models.IntegerField(default=1, null=False)

    def __str__(self):
        """A string representation of the model."""
        return '{0} ({1})'.format(self.user_status_id, self.user_id.email)
