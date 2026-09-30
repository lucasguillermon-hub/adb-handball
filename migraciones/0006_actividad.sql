-- Actividad de la web, para poder decirle a un sponsor cuánta gente pasó y cuántos
-- tocaron su espacio. No guarda nada de nadie: solo una cuenta por día.
--
-- visitas: una fila por día y por persona (la misma cookie anónima de la MVP y el prode).
--   Contar las filas de un día = cuántas personas distintas entraron ese día.
CREATE TABLE IF NOT EXISTS visitas (
  dia       TEXT NOT NULL,     -- AAAA-MM-DD, hora argentina
  visitante TEXT NOT NULL,     -- id anónimo de la cookie
  PRIMARY KEY (dia, visitante)
);
-- eventos: un contador por día y por cosa que pasó ("visita", "logo-sponsor", "nota-abierta"...).
CREATE TABLE IF NOT EXISTS eventos (
  dia    TEXT NOT NULL,
  evento TEXT NOT NULL,
  n      INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (dia, evento)
);
