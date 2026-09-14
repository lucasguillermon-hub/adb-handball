-- Base de contactos del club. Una fila por mail.
CREATE TABLE IF NOT EXISTS contactos (
  mail            TEXT PRIMARY KEY,   -- siempre en minúsculas
  nombre          TEXT,               -- solo si lo dejó (formulario "quiero jugar")
  origen          TEXT NOT NULL,      -- por qué formulario llegó: aviso-apertura, newsletter o quiero-jugar
  alta            TEXT NOT NULL,      -- fecha y hora en que se anotó (ISO, UTC)
  ultimo_contacto TEXT NOT NULL,      -- última vez que mandó un formulario
  baja            TEXT                -- fecha en que pidió no recibir más mails; vacío = activo
);
