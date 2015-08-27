<?php
class Especialidade{
   var $COD_ESPECIALIDADE;
   var $DES_ESPECIALIDADE;
   function Especialidade(
       $_COD_ESPECIALIDADE,
       $_DES_ESPECIALIDADE){
       $this->COD_ESPECIALIDADE = $_COD_ESPECIALIDADE;
       $this->DES_ESPECIALIDADE = $_DES_ESPECIALIDADE;
   }
   function getCOD_ESPECIALIDADE(){
       return $this->COD_ESPECIALIDADE;
   }
   function setCOD_ESPECIALIDADE($COD_ESPECIALIDADE){
       $this->COD_ESPECIALIDADE = $COD_ESPECIALIDADE;
   }
   function getDES_ESPECIALIDADE(){
       return $this->DES_ESPECIALIDADE;
   }
   function setDES_ESPECIALIDADE($DES_ESPECIALIDADE){
       $this->DES_ESPECIALIDADE = $DES_ESPECIALIDADE;
   }
}
?>
