from django.conf.urls import patterns, url
from victorgse import views

urlpatterns = patterns('',
        url(r'^$', views.home, name='home'))