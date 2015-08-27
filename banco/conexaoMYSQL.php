<?php

class conexaoMySql{
  var $sconec;
  var $status;
  var $transaction;
  var $retorno;

  function conexaoMySql(){
    $this->status = 'nao conectado';
  }

  function conectarMySql(){
    //$this->sconec = mysql_connect('10.3.2.2', 'root', '@novosrumos#');
    $this->sconec = mysql_connect('localhost', 'root', 'Meiaoito10!');
    mysql_select_db('consultorio', $this->sconec);
    if($this->sconec){
      $this->status = 'conectado';
    }else{
      $this->status = 'nao conectado';
    }
  }

  function desconectarMySql(){
    mysql_close($this->sconec);
    $this->sconec = NULL;
    $this->status = 'nao conectado';
  }

  function getStatusMySql(){
    return $this->status;
  }

  function queryMySql($query){
    if($this->status == "conectado"){
      $retorno = mysql_query($query, $this->sconec);
    }
    return $retorno;
  }
  
  function lastIdMySql(){
    return mysql_insert_id($this->sconec);
  }

  function fetchArrayMySql($result){
    if($retorno = mysql_fetch_array($result)){
      return $retorno;
    }else{
      return 0;
    }
  }

  function startTransactionMySql(){
    global $transaction;
    $this->queryMySql('START TRANSACTION');
    $transaction='TRUE';
    return $transaction;
  }

  function commitMySql(){
    global $transaction;
    if ($transaction == 'TRUE'){
      return $this->queryMySql('COMMIT');
    }
  }

  function rollbackMySql(){
    global $transaction;
    if ($transaction == 'TRUE'){
      return $this->queryMySql('ROLLBACK');
    }
  }

}
?>