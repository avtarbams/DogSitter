from django.http import Http404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import UserProfile, UserStatus
from .serializers import UserProfileSerializer, UserStatusSerializer


class UserProfileList(APIView):
    '''
        If the below post method changed to get it will become get request (just change the keyword post-->get)
    '''
    def post(self, request, format=None):
        UserProfiles = UserProfile.objects.filter(is_active=1)
        serializer = UserProfileSerializer(UserProfiles, many=True)
        return Response(serializer.data)

# For /UserProfile/addUserProfile/ --> Kind of URL
# Post Request
class AddUserProfile(APIView):

    def post(self, request, format=None):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# For /UserProfile/UserStatus/addUserStatus/ --> Kind of URL
# Post Request
class AddUserStatus(APIView):

    def post(self, request, format=None):
        serializer = UserStatusSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# For /UserProfile/UserStatus/AllUserStatus/ --> Kind of URL
# Post Request
class UserStatusList(APIView):
    '''
        If the below post method changed to get it will become get request (just change the keyword post-->get)
    '''

    def post(self, request, format=None):
        UserStatuses = UserStatus.objects.filter(is_active=1)
        serializer = UserStatusSerializer(UserStatuses, many=True)
        return Response(serializer.data)


# For /UserProfile/1/ --> Kind of URL
# Change the various HTTP methods Get-->Retrive, Put-->Update, Delete-->Delete records
class UserProfileDetailByEmail(APIView):
    """
    Retrieve, update or delete a single UserProfile instance.
    """

    def get_object(self, email):
        try:
            return UserProfile.objects.get(email=email,is_active=1)
        except UserProfile.DoesNotExist:
            raise Http404

    def get(self, request, email, format=None):
        UserProfile = self.get_object(email)
        UserProfile = UserProfileSerializer(UserProfile)
        return Response(UserProfile.data)

    def put(self, request, email, format=None):
        UserProfile = self.get_object(email)
        serializer = UserProfileSerializer(UserProfile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, email, format=None):
        UserProfile = self.get_object(email)
        UserProfile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserProfileDetail(APIView):

    def get_object(self, pk):
        try:
            return UserProfile.objects.get(pk=pk, is_active=1)
        except UserProfile.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        UserProfile = self.get_object(pk)
        UserProfile = UserProfileSerializer(UserProfile)
        return Response(UserProfile.data)

    def put(self, request, pk, format=None):
        UserProfile = self.get_object(pk)
        serializer = UserProfileSerializer(UserProfile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        UserProfile = self.get_object(pk)
        UserProfile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserProfileAuthView(APIView):

    def post(self, request):

        email = request.data['email_id']
        password = request.data['password']

        if not email or not password:
            return None

        try:
            user = UserProfile.objects.get(email_id=email, password=password)
            # If you have some other methods to auth, use here
            if not user:
                return None

        except UserProfile.DoesNotExist:
            return Response({})

        serializer = UserProfileSerializer(user)
        request.session["USER_PROFILE"] = serializer.data
        return Response(serializer.data)