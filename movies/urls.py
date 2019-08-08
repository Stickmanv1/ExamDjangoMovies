# from django.urls import path
# from . import views


# urlpatterns = [
#     path('', views.index, name='index')
# ]

from rest_framework import routers
from .api import MovieViewset

router = routers.DefaultRouter()
router.register('api/movies', MovieViewset, 'movies')

urlpatterns = router.urls
