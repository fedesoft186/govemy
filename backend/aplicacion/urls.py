from django.conf.urls import url
from aplicacion import views

urlpatterns = [
    url(r'^usuarios/$', views.UsuarioList.as_view()),
    url(r'^usuarios/(?P<pk>[0-9]+)/$', views.UsuarioDetail.as_view()),
    url(r'^perfiles/$', views.PerfilList.as_view()),
    url(r'^perfiles/(?P<pk>[0-9]+)/$', views.CursoDetail.as_view()),
    url(r'^cursos/$', views.CursoList.as_view()),
    url(r'^cursos/(?P<pk>[0-9]+)/$', views.CursoDetail.as_view()),
    url(r'^temas/$', views.TemaList.as_view()),
    url(r'^temas/(?P<pk>[0-9]+)/$', views.TemaDetail.as_view()),
    url(r'^materias/$', views.MateriaList.as_view()),
    url(r'^materias/(?P<pk>[0-9]+)/$', views.MateriaDetail.as_view()),
   # url(r'^contenidos/$', views.contenidoList.as_view()),
    #url(r'^contenidos/(?P<pk>[0-9]+)/$', views.contenidoDetail.as_view()),
]
