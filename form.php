<?php
$email = "obgdn18@gmail.com";
$title = "Заказ ремонта";
$message = 'Заголовок: '.$title.' | Имя: '.$_GET['name'].' | Телефон: '.$_GET['phone'].' | Неисправность: '.$_GET['wreck'];

mail($email, $title, $message); 
?>