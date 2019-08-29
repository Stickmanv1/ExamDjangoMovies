from rest_framework import serializers
# from movies.models import Movie
from .models import Movie, Genre

# movie serializer


class MovieSerializers(serializers.ModelSerializer):
    class Meta:
        model = Movie
        # exclude = ('date_created',)
        fields = '__all__'
