from movies.models import Movie
from rest_framework import viewsets, permissions
from .serializers import MovieSerializers

# Code here (viewset)


class MovieViewset(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = MovieSerializers
