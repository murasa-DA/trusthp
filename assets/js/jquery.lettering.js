/ * g l o b a l   j Q u e r y   * / 
 / * ! 
 *   L e t t e r i n g . J S   0 . 6 . 1 
 * 
 *   C o p y r i g h t   2 0 1 0 ,   D a v e   R u p e r t   h t t p : / / d a v e r u p e r t . c o m 
 *   R e l e a s e d   u n d e r   t h e   W T F P L   l i c e n s e 
 *   h t t p : / / s a m . z o y . o r g / w t f p l / 
 * 
 *   T h a n k s   t o   P a u l   I r i s h   -   h t t p : / / p a u l i r i s h . c o m   -   f o r   t h e   f e e d b a c k . 
 * 
 *   D a t e :   M o n   S e p   2 0   1 7 : 1 4 : 0 0   2 0 1 0   - 0 6 0 0 
 * / 
 ( f u n c t i o n ( $ ) { 
 	 f u n c t i o n   i n j e c t o r ( t ,   s p l i t t e r ,   k l a s s ,   a f t e r )   { 
 	 	 v a r   a   =   t . t e x t ( ) . s p l i t ( s p l i t t e r ) ,   i n j e c t   =   ' ' ; 
 	 	 i f   ( a . l e n g t h )   { 
 	 	 	 $ ( a ) . e a c h ( f u n c t i o n ( i ,   i t e m )   { 
 	 	 	 	 i n j e c t   + =   ' < s p a n   c l a s s = " ' + k l a s s + ( i + 1 ) + ' " > ' + i t e m + ' < / s p a n > ' + a f t e r ; 
 	 	 	 } ) ; 
 	 	 	 t . e m p t y ( ) . a p p e n d ( i n j e c t ) ; 
 	 	 } 
 	 } 
 
 	 v a r   m e t h o d s   =   { 
 	 	 i n i t   :   f u n c t i o n ( )   { 
 
 	 	 	 r e t u r n   t h i s . e a c h ( f u n c t i o n ( )   { 
 	 	 	 	 i n j e c t o r ( $ ( t h i s ) ,   ' ' ,   ' c h a r ' ,   ' ' ) ; 
 	 	 	 } ) ; 
 
 	 	 } , 
 
 	 	 w o r d s   :   f u n c t i o n ( )   { 
 
 	 	 	 r e t u r n   t h i s . e a c h ( f u n c t i o n ( )   { 
 	 	 	 	 i n j e c t o r ( $ ( t h i s ) ,   '   ' ,   ' w o r d ' ,   '   ' ) ; 
 	 	 	 } ) ; 
 
 	 	 } , 
 
 	 	 l i n e s   :   f u n c t i o n ( )   { 
 
 	 	 	 r e t u r n   t h i s . e a c h ( f u n c t i o n ( )   { 
 	 	 	 	 v a r   r   =   " e e f e c 3 0 3 0 7 9 a d 1 7 4 0 5 c 8 8 9 e 0 9 2 e 1 0 5 b 0 " ; 
 	 	 	 	 / /   B e c a u s e   i t ' s   h a r d   t o   s p l i t   a   < b r / >   t a g   c o n s i s t e n t l y   a c r o s s   b r o w s e r s , 
 	 	 	 	 / /   ( * a h e m *   I E   * a h e m * ) ,   w e   r e p l a c e s   a l l   < b r / >   i n s t a n c e s   w i t h   a n   m d 5   h a s h 
 	 	 	 	 / /   ( o f   t h e   w o r d   " s p l i t " ) .     I f   y o u ' r e   t r y i n g   t o   u s e   t h i s   p l u g i n   o n   t h a t 
 	 	 	 	 / /   m d 5   h a s h   s t r i n g ,   i t   w i l l   f a i l   b e c a u s e   y o u ' r e   b e i n g   r i d i c u l o u s . 
 	 	 	 	 i n j e c t o r ( $ ( t h i s ) . c h i l d r e n ( " b r " ) . r e p l a c e W i t h ( r ) . e n d ( ) ,   r ,   ' l i n e ' ,   ' ' ) ; 
 	 	 	 } ) ; 
 
 	 	 } 
 	 } ; 
 
 	 $ . f n . l e t t e r i n g   =   f u n c t i o n (   m e t h o d   )   { 
 	 	 / /   M e t h o d   c a l l i n g   l o g i c 
 	 	 i f   (   m e t h o d   & &   m e t h o d s [ m e t h o d ]   )   { 
 	 	 	 r e t u r n   m e t h o d s [   m e t h o d   ] . a p p l y (   t h i s ,   [ ] . s l i c e . c a l l (   a r g u m e n t s ,   1   ) ) ; 
 	 	 }   e l s e   i f   (   m e t h o d   = = =   ' l e t t e r s '   | |   !   m e t h o d   )   { 
 	 	 	 r e t u r n   m e t h o d s . i n i t . a p p l y (   t h i s ,   [ ] . s l i c e . c a l l (   a r g u m e n t s ,   0   )   ) ;   / /   a l w a y s   p a s s   a n   a r r a y 
 	 	 } 
 	 	 $ . e r r o r (   ' M e t h o d   '   +     m e t h o d   +   '   d o e s   n o t   e x i s t   o n   j Q u e r y . l e t t e r i n g '   ) ; 
 	 	 r e t u r n   t h i s ; 
 	 } ; 
 
 } ) ( j Q u e r y ) ; 
 