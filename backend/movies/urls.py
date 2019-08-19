from rest_framework import routers
from .api import MovieViewset  # , MovieViewDetail

router = routers.DefaultRouter()
router.register('api', MovieViewset, 'movies')
# router.register('<pk>', MovieViewDetail, 'movies')

urlpatterns = router.urls
# from django.urls import path
# from . import views


# urlpatterns = [
#     path('', views.index, name='index')
# ]
