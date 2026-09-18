-- Pronósticos del prode. Una fila por persona (cookie anónima), plantel y partido.
-- Igual que la MVP, solo se conserva el partido vigente de cada plantel.
CREATE TABLE IF NOT EXISTS prode (
  plantel TEXT NOT NULL,
  fecha   TEXT NOT NULL,      -- fecha del partido, AAAA-MM-DD
  votante TEXT NOT NULL,      -- id anónimo de la cookie
  local   INTEGER NOT NULL,   -- goles del Bosco
  visita  INTEGER NOT NULL,   -- goles del rival
  creado  TEXT NOT NULL,
  PRIMARY KEY (plantel, fecha, votante)
);
