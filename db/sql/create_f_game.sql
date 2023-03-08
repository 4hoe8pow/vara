PRAGMA FOREIGN_KEYS = ON;

CREATE TABLE IF NOT EXISTS F_GAME (
  GAME_ID INTEGER NOT NULL PRIMARY KEY REFERENCES W_PREGAME(PREGAME_ID),
  TOURNAMENT_CODE INTEGER NOT NULL REFERENCES D_TOURNAMENT(TOURNAMENT_CODE),
  WINNER_ID INTEGER NOT NULL REFERENCES D_TEAM(TEAM_ID),
  WINNER_SCORE INTEGER NOT NULL,
  LOSER_ID INTEGER NOT NULL REFERENCES D_TEAM(TEAM_ID),
  LOSER_SCORE INTEGER NOT NULL,
  CREATED_AT TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')),
  EDITED_AT TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime'))
);

CREATE TRIGGER TRIGGER_F_GAME_UPDATED_AT AFTER
  UPDATE ON F_GAME
BEGIN
  UPDATE F_GAME
  SET
    UPDATED_AT = DATETIME(
      'now',
      'localtime'
    )
  WHERE
    ROWID == NEW.ROWID;
END;