CREATE TABLE Utilisateur (
   IdUser INT AUTO_INCREMENT,
   PrenomUser VARCHAR(50) NOT NULL,
   NomUser VARCHAR(50) NOT NULL,
   LoginUser VARCHAR(50) NOT NULL,
   PasswordUser VARCHAR(50) NOT NULL,
   PRIMARY KEY(IdUser),
   UNIQUE(LoginUser),
   UNIQUE(PasswordUser)
);

CREATE TABLE Lieu (
   IdLieu INT AUTO_INCREMENT,
   LongitudeLieu VARCHAR(50) NOT NULL,
   LatitudeLieu VARCHAR(50) NOT NULL,
   IdUser INT,
   PRIMARY KEY(IdLieu),
   FOREIGN KEY(IdUser) REFERENCES Utilisateur(IdUser)
);

CREATE TABLE Itinéraire (
   IdItineraire INT,
   LongitudeAIti VARCHAR(50) NOT NULL,
   LatitudeAIti VARCHAR(50) NOT NULL,
   LongitudeBIti VARCHAR(50) NOT NULL,
   LatitudeBIti VARCHAR(50) NOT NULL,
   IdUser INT,
   PRIMARY KEY(IdItineraire),
   FOREIGN KEY(IdUser) REFERENCES Utilisateur(IdUser)
);

INSERT INTO Utilisateur(IdUser, PrenomUser, NomUser, LoginUser, PasswordUser) VALUES (1, "Uzeir", "Joomun", "ujoomun", "ujoomun");
INSERT INTO Utilisateur(IdUser, PrenomUser, NomUser, LoginUser, PasswordUser) VALUES (2, "Réléna", "Lim", "rlim", "rlim");
INSERT INTO Utilisateur(IdUser, PrenomUser, NomUser, LoginUser, PasswordUser) VALUES (3, "Lorie", "Chen", "lchen", "lchen");

INSERT INTO Lieu(IdLieu, LongitudeLieu, LatitudeLieu, IdUser) VALUES (1,"2.2944991", "48.8582602", 1);
INSERT INTO Lieu(IdLieu, LongitudeLieu, LatitudeLieu, IdUser) VALUES (2,"2.345784", "48.8533538", 1);
INSERT INTO Lieu(IdLieu, LongitudeLieu, LatitudeLieu, IdUser) VALUES (3,"2.3144984", "48.8608923", 2);
INSERT INTO Lieu(IdLieu, LongitudeLieu, LatitudeLieu, IdUser) VALUES (4,"2.2950372", "48.8737791", 3);
