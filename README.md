# La boda de Carlos

Web estática preparada para GitHub Pages.

El archivo `qr-boda-carlos.png` contiene el código QR listo para imprimir y dirige a la web publicada.
El archivo `qr-boda-carlos-a4.pdf` incluye 24 copias en una hoja A4 con guías de corte.

## Añadir el video

1. Entra en [YouTube Studio](https://studio.youtube.com/).
2. Pulsa **Crear > Subir videos** y elige `2026-09-14 12.19.36.mp4`.
3. En **Visibilidad**, selecciona **No listado**. No selecciones **Privado**, porque el reproductor de la web no podría mostrarlo a los invitados.
4. Copia la URL del video. En una URL como `https://youtu.be/ABC123xyz`, el identificador es `ABC123xyz`.
5. En `index.html`, sustituye `PON_AQUI_EL_ID` por ese identificador.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube estos archivos. El MP4 está excluido mediante `.gitignore`.
2. En el repositorio, abre **Settings > Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama `main`, la carpeta `/ (root)` y pulsa **Save**.

La web aparecerá en `https://TU_USUARIO.github.io/NOMBRE_DEL_REPOSITORIO/`.
