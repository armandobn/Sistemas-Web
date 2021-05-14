<?php
// Initialize the session
session_start();
 

unset($_SESSION['usuario']); 

// Destroy the session.
session_destroy();
 
// Redirect to login page
header("location: ../default");
exit;
?>