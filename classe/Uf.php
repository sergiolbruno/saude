<?php
class Uf{
   var $COD_UF;
   var $DES_UF;
   function Uf(
       $_COD_UF,
       $_DES_UF){
       $this->COD_UF = $_COD_UF;
       $this->DES_UF = $_DES_UF;
   }
   function getCOD_UF(){
       return $this->COD_UF;
   }
   function setCOD_UF($COD_UF){
       $this->COD_UF = $COD_UF;
   }
   function getDES_UF(){
       return $this->DES_UF;
   }
   function setDES_UF($DES_UF){
       $this->DES_UF = $DES_UF;
   }
}
?>
