from rest_framework.decorators import permission_classes
from django_filters.rest_framework import DjangoFilterBackend
from aplicacion.models import *
from aplicacion.serializers import *

from aplicacion.permissions import IsPostOrIsAuthenticated
from rest_framework import generics
from rest_framework.permissions import AllowAny

@permission_classes((IsPostOrIsAuthenticated, ))
class UsuarioList(generics.ListCreateAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('user_id',)


class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

@permission_classes((AllowAny, ))
class PerfilList(generics.ListAPIView):
    serializer_class = PerfilSerializer
    queryset = Perfil.objects.all()


class PerfilDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PerfilSerializer
    queryset = Perfil.objects.all()
    

@permission_classes((AllowAny, ))
class CursoList(generics.ListAPIView):
    serializer_class = CursoSerializer
    queryset = Curso.objects.all()


class CursoDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CursoSerializer
    queryset = Curso.objects.all()

class MateriaList(generics.ListCreateAPIView):
    serializer_class = MateriaSerializer
    queryset = Materia.objects.all()


class MateriaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MateriaSerializer
    queryset = Materia.objects.all()

class TemaList(generics.ListCreateAPIView):
    serializer_class = TemaSerializer
    queryset = Tema.objects.all()


class TemaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TemaSerializer
    queryset = Tema.objects.all()

class ContenidoList(generics.ListCreateAPIView):
    serializer_class = ContenidoSerializer
    queryset = Contenido.objects.all()


class ContenidoDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContenidoSerializer
    queryset = Contenido.objects.all()
    #filter_backends = (DjangoFilterBackend,)
   # filter_fields = ('contenido_tema__materia__curso',)
    #?contenido_tema__materia__curso=1 en el rest ts