<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

use Auth;
use App\ResponseBuilder;

class RegisterRequest extends FormRequest
{
  /**
  * Determine if the user is authorized to make this request.
  *
  * @return bool
  */
  public function authorize()
  {
    return !Auth::check();
  }

  public function response(array $errors)
  {
    return ResponseBuilder::send(false, $errors, "");
  }

  protected function failedValidation(Validator $validator)
  {
    throw new HttpResponseException(response()->json(ResponseBuilder::build(false, $validator->errors() , '')));
  }

  /**
  * Get the validation rules that apply to the request.
  *
  * @return array
  */
  public function rules()
  {
    return [
      'fullname' => 'required|string',
      'email' => 'required|email',
      'password' => 'required'
    ];
  }
}
