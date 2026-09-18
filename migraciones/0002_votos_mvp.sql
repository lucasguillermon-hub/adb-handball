-- Votos de la figura de la fecha. Una fila por persona (cookie anónima), plantel y fecha.
-- Solo se conserva la fecha vigente de cada plantel: al entrar el primer voto de una
-- fecha nueva, el Worker borra los de las anteriores.
CREATE TABLE IF NOT EXISTS votos_mvp (
  plantel  TEXT NOT NULL,     -- id del plantel en datos.js (mayores-a, inferiores, ...)
  fecha    TEXT NOT NULL,     -- fecha del partido votado, AAAA-MM-DD
  votante  TEXT NOT NULL,     -- id anónimo de la cookie
  jugadora TEXT NOT NULL,
  creado   TEXT NOT NULL,
  PRIMARY KEY (plantel, fecha, votante)
);
