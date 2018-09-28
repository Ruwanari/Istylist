<?php

if(isset($_POST) && !empty($_POST)){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == "admin" && $password == "admin"){
        ?>
    {
        "success":true,
        "secret":"This is the secret"
    }

    <?php
} else{
    ?>
    {
        "success":false,
        "secret":"jsfgbdsjfbd"
    }
    <?php
} else{
    ?>
    {
        "success":false,
        "secret":"gggggggggggggg"
    }
    <?php
}
?>