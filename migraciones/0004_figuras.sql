-- Las figuras que ya se votaron. De los votos crudos solo vive la fecha vigente de cada
-- plantel (votos_mvp), así que antes de borrar una fecha se guarda acá quién la ganó y
-- con cuántos votos. Es el historial que se muestra abajo de la votación.
CREATE TABLE IF NOT EXISTS figuras (
  plantel  TEXT NOT NULL,     -- id del plantel en datos.js (mayores-a, juniors, ...)
  fecha    TEXT NOT NULL,     -- fecha del partido votado, AAAA-MM-DD
  jugadora TEXT NOT NULL,     -- la más votada de esa fecha
  votos    INTEGER NOT NULL,  -- votos que sacó
  total    INTEGER NOT NULL,  -- votos que se emitieron en esa fecha
  PRIMARY KEY (plantel, fecha)
);
