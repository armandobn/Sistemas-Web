<?php
// Initialize the session
session_start();
 

unset($_SESSION['aleatorio']); 

// Destroy the session.
//session_destroy();
 
// Redirect to login page
header("location: ../usuario");
exit;
?>