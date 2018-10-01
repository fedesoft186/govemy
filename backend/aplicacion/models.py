from django.db import models

# Create your models here.

class Perfil(models.Model):
    nombre=models.CharField(max_length=200)


    def __str__(self):
        return self.nombre

class Curso(models.Model):
    curso = models.IntegerField(max_length=10)
    

    def __str__(self):
        return str(self.curso)

class Usuario(models.Model):
    nombre=models.CharField(max_length=200)
    num_documento=models.IntegerField(max_length=20)
    correo=models.CharField(max_length=200)
    fecha_nacimiento=models.DateField()
    perfil=models.ForeignKey(Perfil, on_delete = models.CASCADE)
    curso=models.ForeignKey(Curso, on_delete = models.CASCADE)

    def __str__(self):
        return self.nombre



class Materia(models.Model):
    materia=models.CharField(max_length=200)
    curso=models.ForeignKey(Curso, on_delete = models.CASCADE)
    

    def __str__(self):
        return self.materia

class Tema(models.Model):
    tema=models.CharField(max_length=200)
    materia=models.ForeignKey(Materia, on_delete = models.CASCADE)

    def __str__(self):
        return self.tema

class Contenido(models.Model):
    descripcion=models.CharField(max_length=500)
    videos=models.CharField(max_length=200)
    guias=models.FileField(max_length=200)
    contenido_tema=models.ForeignKey(Tema, on_delete = models.CASCADE)
    usuario=models.ForeignKey(Usuario, on_delete = models.CASCADE)

    def __str__(self):
        return self.descripcion