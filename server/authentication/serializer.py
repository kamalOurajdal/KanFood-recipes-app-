# from rest_framework import serializers
#
# from authentication.models import User
#
#
# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ['url', 'id', 'username', 'email']
#         extra_kwargs = {
#             'url': {'view_name': 'user-detail', 'lookup_field': 'pk'}
#         }
