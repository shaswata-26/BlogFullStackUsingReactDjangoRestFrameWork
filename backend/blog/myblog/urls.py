from django.urls import path
from .views import BlogPostList, BlogPostDetail

urlpatterns = [
    path('posts/', BlogPostList.as_view(), name='blogpost-list'),
    path('posts/<int:pk>/', BlogPostDetail.as_view(), name='blogpost-detail'),
]
