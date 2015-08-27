<?php
class Empresa{
   var $COD_EMPRESA;
   var $DES_RAZAO_SOCIAL;
   var $DES_NOME_FANTASIA;
   var $DES_ENDERECO;
   var $NUM_NUMERO;
   var $DES_COMPLEMENTO;
   var $DES_BAIRRO;
   var $DES_CIDADE;
   var $NUM_CEP;
   var $NUM_CNPJ_CPF;
   var $COD_UF;
   var $NUM_TELEFONE_01;
   var $NUM_TELEFONE_02;
   var $NUM_CELULAR;
   var $NUM_INSCRICAO_ESTADUAL;
   var $NUM_INSCRICAO_MUNICIPAL;
   var $DES_SITE;
   var $DES_EMAIL;
   
   function Empresa(
   	   $_COD_EMPRESA,
       $_DES_RAZAO_SOCIAL,
       $_DES_NOME_FANTASIA,
       $_DES_ENDERECO,
       $_NUM_NUMERO,
       $_DES_COMPLEMENTO,
       $_DES_BAIRRO,
       $_DES_CIDADE,
       $_NUM_CEP,
       $_NUM_CNPJ_CPF,
       $_COD_UF,
       $_NUM_TELEFONE_01,
       $_NUM_TELEFONE_02,
       $_NUM_CELULAR,
       $_NUM_INSCRICAO_ESTADUAL,
       $_NUM_INSCRICAO_MUNICIPAL,
       $_DES_SITE,
       $_DES_EMAIL){
   	   $this->COD_EMPRESA = $_COD_EMPRESA;
       $this->DES_RAZAO_SOCIAL = $_DES_RAZAO_SOCIAL;
       $this->DES_NOME_FANTASIA = $_DES_NOME_FANTASIA;
       $this->DES_ENDERECO = $_DES_ENDERECO;
       $this->NUM_NUMERO = $_NUM_NUMERO;
       $this->DES_COMPLEMENTO = $_DES_COMPLEMENTO;
       $this->DES_BAIRRO = $_DES_BAIRRO;
       $this->DES_CIDADE = $_DES_CIDADE;
       $this->NUM_CEP = $_NUM_CEP;
       $this->NUM_CNPJ_CPF = $_NUM_CNPJ_CPF;
       $this->COD_UF = $_COD_UF;
       $this->NUM_TELEFONE_01 = $_NUM_TELEFONE_01;
       $this->NUM_TELEFONE_02 = $_NUM_TELEFONE_02;
       $this->NUM_CELULAR = $_NUM_CELULAR;
       $this->NUM_INSCRICAO_ESTADUAL = $_NUM_INSCRICAO_ESTADUAL;
       $this->NUM_INSCRICAO_MUNICIPAL = $_NUM_INSCRICAO_MUNICIPAL;
       $this->DES_SITE = $_DES_SITE;
       $this->DES_EMAIL = $_DES_EMAIL;
   }

   function getCOD_EMPRESA(){
       return $this->COD_EMPRESA;
   }
   function setCOD_EMPRESA($COD_EMPRESA){
       $this->COD_EMPRESA = $COD_EMPRESA;
   }

   function getDES_RAZAO_SOCIAL(){
       return $this->DES_RAZAO_SOCIAL;
   }
   function setDES_RAZAO_SOCIAL($DES_RAZAO_SOCIAL){
       $this->DES_RAZAO_SOCIAL = $DES_RAZAO_SOCIAL;
   }
   
   function getDES_NOME_FANTASIA(){
   	return $this->DES_NOME_FANTASIA;
   }
   function setDES_NOME_FANTASIA($DES_NOME_FANTASIA){
   	$this->DES_NOME_FANTASIA = $DES_NOME_FANTASIA;
   }
    
   function getDES_ENDERECO(){
   	return $this->DES_ENDERECO;
   }
   function setDES_ENDERECO($DES_ENDERECO){
   	$this->DES_ENDERECO = $DES_ENDERECO;
   }
    
   function getNUM_NUMERO(){
   	return $this->NUM_NUMERO;
   }
   function setNUM_NUMERO($NUM_NUMERO){
   	$this->NUM_NUMERO = $NUM_NUMERO;
   }
    
   function getDES_COMPLEMENTO(){
   	return $this->DES_COMPLEMENTO;
   }
   function setDES_COMPLEMENTO($DES_COMPLEMENTO){
   	$this->DES_COMPLEMENTO = $DES_COMPLEMENTO;
   }
    
   function getDES_BAIRRO(){
   	return $this->DES_BAIRRO;
   }
   function setDES_BAIRRO($DES_BAIRRO){
   	$this->DES_BAIRRO = $DES_BAIRRO;
   }
    
   function getDES_CIDADE(){
   	return $this->DES_CIDADE;
   }
   function setDES_CIDADE($DES_CIDADE){
   	$this->DES_CIDADE = $DES_CIDADE;
   }
    
   function getNUM_CEP(){
   	return $this->NUM_CEP;
   }
   function setNUM_CEP($NUM_CEP){
   	$this->NUM_CEP = $NUM_CEP;
   }
    
   function getNUM_CNPJ_CPF(){
   	return $this->NUM_CNPJ_CPF;
   }
   function setNUM_CNPJ_CPF($NUM_CNPJ_CPF){
   	$this->NUM_CNPJ_CPF = $NUM_CNPJ_CPF;
   }
    
   function getCOD_UF(){
   	return $this->COD_UF;
   }
   function setCOD_UF($COD_UF){
   	$this->COD_UF = $COD_UF;
   }
   
   function getNUM_TELEFONE_01(){
   	return $this->NUM_TELEFONE_01;
   }
   function setNUM_TELEFONE_01($NUM_TELEFONE_01){
   	$this->NUM_TELEFONE_01 = $NUM_TELEFONE_01;
   }

   function getNUM_TELEFONE_02(){
   	return $this->NUM_TELEFONE_02;
   }
   function setNUM_TELEFONE_02($NUM_TELEFONE_02){
   	$this->NUM_TELEFONE_02 = $NUM_TELEFONE_02;
   }
    
   function getNUM_CELULAR(){
   	return $this->NUM_CELULAR;
   }
   function setNUM_CELULAR($NUM_CELULAR){
   	$this->NUM_CELULAR = $NUM_CELULAR;
   }
   
   function getNUM_INSCRICAO_ESTADUAL(){
   	return $this->NUM_INSCRICAO_ESTADUAL;
   }
   function setNUM_INSCRICAO_ESTADUAL($NUM_INSCRICAO_ESTADUAL){
   	$this->NUM_INSCRICAO_ESTADUAL = $NUM_INSCRICAO_ESTADUAL;
   }
    
   function getNUM_INSCRICAO_MUNICIPAL(){
   	return $this->NUM_INSCRICAO_MUNICIPAL;
   }
   function setNUM_INSCRICAO_MUNICIPAL($NUM_INSCRICAO_MUNICIPAL){
   	$this->NUM_INSCRICAO_MUNICIPAL = $NUM_INSCRICAO_MUNICIPAL;
   }
   
   function getDES_SITE(){
   	return $this->DES_SITE;
   }
   function setDES_SITE($DES_SITE){
   	$this->DES_SITE = $DES_SITE;
   }
   
   function getDES_EMAIL(){
   	return $this->DES_EMAIL;
   }
   function setDES_EMAIL($DES_EMAIL){
   	$this->DES_EMAIL = $DES_EMAIL;
   }
    
}
?>
