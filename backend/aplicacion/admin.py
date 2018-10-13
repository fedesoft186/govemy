from django.contrib import admin


from .models import Usuario
from .models import Perfil
from .models import Curso
from .models import Materia
from .models import Tema
from .models import Contenido

admin.site.register(Usuario)
admin.site.register(Perfil)
admin.site.register(Curso)
admin.site.register(Materia)
admin.site.register(Tema)
admin.site.register(Contenido)

