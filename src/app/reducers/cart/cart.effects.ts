// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { mergeMap, map } from 'rxjs/operators';
// import { CartService } from '../../services/cart.service';
// import * as CartActions from './cart.actions';

// @Injectable()
// export class CartEffects {
//   addToCart$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(CartActions.addToCart),
//       mergeMap(({ product, quantity }) =>
//         this.cartService.addToCart(product, quantity).pipe(
//           map(() => CartActions.addToCartSuccess({ product, quantity }))
//         )
//       )
//     )
//   );

//   removeFromCart$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(CartActions.removeFromCart),
//       mergeMap(({ productId }) =>
//         this.cartService.removeFromCart(productId).pipe(
//           map(() => CartActions.removeFromCartSuccess({ productId }))
//         )
//       )
//     )
//   );

//   updateCartItemQuantity$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(CartActions.updateCartItemQuantity),
//       mergeMap(({ productId, quantity }) =>
//         this.cartService.updateCartItemQuantity(productId, quantity).pipe(
//           map(() => CartActions.updateCartItemQuantitySuccess({ productId, quantity }))
//         )
//       )
//     )
//   );

//   constructor(private actions$: Actions, private cartService: CartService) {}
// }
