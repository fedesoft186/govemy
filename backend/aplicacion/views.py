from rest_framework.decorators import permission_classes
from aplicacion.models import Usuario
from aplicacion.serializers import UsuarioSerializer
from aplicacion.permissions import IsPostOrIsAuthenticated
from rest_framework import generics


@permission_classes((IsPostOrIsAuthenticated, ))
class UsuarioList(generics.ListCreateAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()


class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
