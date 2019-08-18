from rest_framework import serializers
from .models import Movie

# movie serializer


class MovieSerializers(serializers.ModelSerializer):
    class Meta:
        model = Movie
        #exclude = ('date_created',)
        fields = '__all__'
