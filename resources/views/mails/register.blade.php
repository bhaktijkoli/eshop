@extends('mails.master')
@section('title')
  {{ $subject }}
@endsection
@section('content')
  Hello {{ $user->name }} !
  <br />
  <br />
  <p>
     You or someone with your email address signed up at {{ config('app.name') }}. Your new account is almost ready, but before you can login you need to verify the ownership of this email address.
     <br />
      To verify your email address, click on the button bellow.
      <br />
      <a href="{{url("/user/verify?id=$ev->tokenid&token=$ev->token")}}" class="btn btn-primary" style="width:100px;">Verify</a>
  </p>
  <br />
  <br />
  Thanks!<br />
  {{-- {{ config('app.team') }} --}}
@endsection
