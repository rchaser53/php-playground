<?php 
  $data = [ 'a', 'b', 'c' ];
  header('Content-type: application/json');
  header('Access-Control-Allow-Origin: *');
  echo json_encode( $data );
?>