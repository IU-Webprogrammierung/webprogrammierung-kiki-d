<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // E-Mail Empfänger
    $to = "chiaradent2011@gmail.com";

    // Betreff
    $subject = "Neue Nachricht von $name";

    // Nachricht zusammenbauen
    $body = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

    // Header
    $headers = "From: $email";

    // Mail senden
    if (mail($to, $subject, $body, $headers)) {
        echo "Danke! Deine Nachricht wurde gesendet.";
    } else {
        echo "Leider konnte die Nachricht nicht gesendet werden.";
    }
}
?>
