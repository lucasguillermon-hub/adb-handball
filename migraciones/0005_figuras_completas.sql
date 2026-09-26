-- De cada votación cerrada se guarda el conteo completo, no solo la más votada: así queda
-- el ranking entero y se ven los empates. Una fila por jugadora votada.
-- (La tabla vieja guardaba una sola fila por fecha; esas filas se conservan como están.)
ALTER TABLE figuras RENAME TO figuras_ganadora;
CREATE TABLE figuras (
  plantel  TEXT NOT NULL,     -- id del plantel en datos.js (mayores-a, juniors, ...)
  fecha    TEXT NOT NULL,     -- fecha del partido votado, AAAA-MM-DD
  jugadora TEXT NOT NULL,
  votos    INTEGER NOT NULL,  -- votos que sacó esta jugadora
  total    INTEGER NOT NULL,  -- votos que se emitieron en esa fecha
  PRIMARY KEY (plantel, fecha, jugadora)
);
INSERT INTO figuras (plantel, fecha, jugadora, votos, total)
  SELECT plantel, fecha, jugadora, votos, total FROM figuras_ganadora;
DROP TABLE figuras_ganadora;
