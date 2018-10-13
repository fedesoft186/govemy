from rest_framework.decorators import permission_classes

from aplicacion.models import *
from aplicacion.serializers import *

from aplicacion.permissions import IsPostOrIsAuthenticated
from rest_framework import generics


@permission_classes((IsPostOrIsAuthenticated, ))
class UsuarioList(generics.ListCreateAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()


class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
    
class PerfilList(generics.ListCreateAPIView):
    serializer_class = PerfilSerializer
    queryset = Perfil.objects.all()


class PerfilDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PerfilSerializer
    queryset = Perfil.objects.all()

class CursoList(generics.ListCreateAPIView):
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