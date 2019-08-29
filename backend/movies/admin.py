from django.contrib import admin
from .models import Genre, Movie


# Register your models here.
class GenreAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


class MovieAdmin(admin.ModelAdmin):
    #fields = ('name', 'genre')
    # exclude is mean anything but this not include
    exclude = ('date_created',)
    list_display = ('name', 'number_in_stock', 'price_rate', 'genre')


admin.site.register(Genre, GenreAdmin)
admin.site.register(Movie, MovieAdmin)
