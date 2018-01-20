@extends('mails.master')
@section('title')
  {{ $subject }}
@endsection
@section('content')
  Welcome {{ $user->name }} !
  <br />
  <br />
  <p>
  </p>
@endsection
