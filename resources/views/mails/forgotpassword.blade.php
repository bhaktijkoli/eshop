@extends('mails.master')
@section('title')
  {{ $subject }}
@endsection
@section('content')
  Hello {{ $user->name }} !
  <br />
  <br />
  <p>
    We receive a request to reset your password associated with this email address. If you made this request, click the reset button below.
      <br />
      <a href="{{url("/user/resetpassword?id=$pr->tokenid&token=$pr->token")}}" class="btn btn-primary" style="width:200px;">Reset password</a>
  </p>
  <br />
  <br />
  Thanks!<br />
  {{-- {{ config('app.team') }} --}}
@endsection
