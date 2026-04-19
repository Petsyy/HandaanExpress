<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Api\Controller;
use App\Http\Requests\StoreVariantRequest;
use App\Services\ProductVariantService;

class ProductVariantController extends Controller
{
    protected $productVariantService;

    public function __construct(ProductVariantService $productVariantService)
    {
        $this->productVariantService = $productVariantService;
    }

    public function index()
    {
       $variants = $this->productVariantService->getAll();

        return response()->json($variants);
    }

    public function store(StoreVariantRequest $request)
    {
        $variant = $this->productVariantService->createVariant($request->validated());

        return response()->json([
            "message" => 'Variant created successfully',
            "variant" => $variant,
        ], 201);

    }
    public function show(int $id)
    {
        $variant = $this->productVariantService->getById($id);

        return response()->json($variant);
    }
}
