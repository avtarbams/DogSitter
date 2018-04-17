# Generated by Django 2.0.4 on 2018-04-16 02:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('firstName', models.CharField(blank=True, default='', max_length=200)),
                ('lastName', models.CharField(blank=True, default='', max_length=200)),
                ('email_id', models.CharField(max_length=200)),
                ('address', models.CharField(blank=True, default='', max_length=500)),
                ('password', models.CharField(blank=True, default='', max_length=200)),
                ('role', models.CharField(blank=True, default='', max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='UserStatus',
            fields=[
                ('user_status_id', models.AutoField(primary_key=True, serialize=False)),
                ('status', models.CharField(max_length=200)),
                ('updated_time', models.DateTimeField(auto_now=True)),
                ('is_active', models.IntegerField(default=1)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_status', to='dogsitter.UserProfile')),
            ],
        ),
    ]