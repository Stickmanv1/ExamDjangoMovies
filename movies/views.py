from django.http import HttpResponse
from django.shortcuts import render
from .models import Movie
# Create your views here.


# def index(request):
#     # select * from movies_movie
#     def __str__(self):
#         return self.name

#     movies = Movie.objects.all()
#     output = ','.join([m.name for m in movies])
#     # select * from movies_movie where ....
#     # Movie.objects.filter(release_year=1984)
#     # Movie.objects.get(id=1)
#     return HttpResponse(output)
