<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questionaire</title>
</head>
<body>
    <?php
        //maak een virtual host aan. 1: start wamp op, 2:zoek op je browser "localhost", 3:ga naar de localhost van wamp,
        //4:ga naar "add a virtual host", 5:noem de naam www.arss.local, 
        //6:maak in je schoolprojecten folders of waar je het ook hebt maak daar een map aan,
        //7:als je in visual studio code zit rechter muis klik op proj-CP map en klik dan op "copy path",
        //8:ga dan weer naar localhost en paste de "copy path" in de "absolute path" van localhost
        //9:klik dan op "start the creation", 10:ga terug naar de homepage, 11:refresh wamp door recht klik en dan "refresh",
        //12:nu kan je de kleine link openen via "your virtual host" in de homepage van wamp,

        //maak een databse aan. 1:start wamp op, 2:zoek op je browser "localhost", 3:ga naar de localhost van wamp,
        //4:ga naar "php myadmin" in "your aliases", 5:log in met de password: ProjectP3L1, username: Project-P3-L1,
        //6:klik dan op "nieuw", 7:noem de database: Project-P3, 8:noem de tabelnaam "Questionaire" en maak 3 kolommen,
        //9:eerste kolom: "naam: ID" ; "type: INT" ; "lengte: 500" ; "standaardwaarde: geen" ; "collatie: geen" ; "attributen: geen"
        //"leeg: niet aanvinken" ; "index: Primary" ; "al het andere laten"
        //10:tweede kolom: "naam: e-mail" ; "type: varchar" ; "lengte: 100" ; "standaardwaarde: geen" ; "collatie: geen" ; "attributen: geen"
        //"leeg: niet aanvinken" ; "index: geen" ; "al het andere laten"
        //11:derde kolom: "naam: answers" ; "type: varchar" ; "lengte: 500" ; "standaardwaarde: geen" ; "collatie: geen" ; "attributen: geen"
        //"leeg: niet aanvinken" ; "index: geen" ; "al het andere leeg laten"

        include('confDatabase/conf.php');
    ?>
    <h1>Fill in this form</h1>

    <form action="create.php" method="post">
        <label for="firstname">Firstname:</label>
        <input type="text" name="firstname" id="firstname"><br><br>

        <label for="tussenvoegsel">Infix:</label>
        <input type="text" name="infix" id="infix"><br><br>

        <label for="lastname">Lastname:</label>
        <input type="text" name="lastname" id="lastname"><br><br>

        <label for="birthday">Birth-date:</label>
        <input type="date" name="birthday" id="birthday"><br><br>

        <label for="city">City:</label>
        <input type="text" name="city" id="city"><br><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>