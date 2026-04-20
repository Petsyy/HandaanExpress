<?php

namespace App\Http\Requests\Customer;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CheckoutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'payment_method' => [
                'required',
                'string',
                Rule::in(['cod']),
            ],
            'pickup_date' => [
                'required',
                'date',
                'after_or_equal:today',
            ],
            'pickup_time' => [
                'required',
                'date_format:H:i',
            ],
            'notes' => [
                'nullable',
                'string',
                'max:1000',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'payment_method.required' => 'Payment method is required.',
            'payment_method.in' => 'Invalid payment method selected.',
            'pickup_date.required' => 'Pickup date is required.',
            'pickup_date.after_or_equal' => 'Pickup date must be today or a future date.',
            'pickup_time.required' => 'Pickup time is required.',
            'pickup_time.date_format' => 'Pickup time must be in HH:MM format.',
        ];
    }
}
