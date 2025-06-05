var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "pr-abstract",
  "level": "1",
  "url": "pr-abstract.html",
  "type": "Preface",
  "number": "",
  "title": "Abstract",
  "body": " Abstract  This is an introductory textbook into invariants with a special focus on the InvariantRings Package in Macaulay 2.  "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "acknowledgements",
  "level": "1",
  "url": "acknowledgements.html",
  "type": "Preface",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements  Thanks to the following people who've contributed to this handbook.   The American Institute of Mathematics , for funding my travel to JMM 2024 and JMM 2025 to run professional enhancement programs based upon this handbook.    Jeremy Avigad, for adding Codespaces support to his book Mathematics in Lean in time for JMM 2024.    Francesca Gandini and Brandon Sisler, for co-organizing the JMM 2024 professional enrichment program that this book was written for originally.    Tien Chih and Oscar Levin for contributing chapters on AI and Manim, repsectively.    Francesca Gandini, Al Ashir Intisar, and Sumner Strom contributed the LaTeX, Macaulay2, and Invariant Theory chapters in the St. Olaf edition.     "
},
{
  "id": "introduction",
  "level": "1",
  "url": "introduction.html",
  "type": "Preface",
  "number": "",
  "title": "Introduction",
  "body": " Introduction  Invariant Theory is the study of algebreic strucures like group and rings that remain unchanged under some action, namely inveriants . a common algebreic stucure we study is polynomial rings . For example take some trasformation that swaps and . So we have The question invariant theory asks is what polynomials are unchaged by We can find some simple examples easily such as In fact the set of all these polynomials form a subring! which there special subrings can be hard to compute by hand (thats where our M2 package will come in). There are a lof of questions that arise from these rings these rings have a lot of unique proporties, classifying them is a challenge.  The study of invarient rings started in the 19th century from algebreists such as Cayley. Who studyed linear transformations and in his paper \"On the Theory of Linear Transformations (1845)\" who established the first invariant theory. Furthur David hilburts work and his Finiteness Theorm revolutionised invarient theory saying special invarient rings are finitely generated. So if we want to find the ring we must find all the generators. Most studies of invarient theory study linear transformations over rings of polynomials, like we will focus on in this book. To begin studying invarient theory we must take a detour first to Represenation Theory. Which allows us to concretly represent these group actions that act on on our rings as linear transformations.  "
},
{
  "id": "introduction-2",
  "level": "2",
  "url": "introduction.html#introduction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inveriants polynomial rings "
},
{
  "id": "introduction-3",
  "level": "2",
  "url": "introduction.html#introduction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Represenation Theory. "
},
{
  "id": "ch-representation-theory",
  "level": "1",
  "url": "ch-representation-theory.html",
  "type": "Chapter",
  "number": "1",
  "title": "Representation theory",
  "body": " Representation theory     Introduction  Group theory has become one of the most important aspects in mathematics. Groups are a very hard object to study because sometimes they can be very abstractly described and hard to visualize. Representation Theory allows us to study groups as linear transformations and use linear algebra. This allows us to study groups less abstractly, allowing for us to learn more about groups and apply our group theory knowledge to applications. This method of representing groups as something simpler dates all the way back to Gauss we used the characters of abelian groups. It was expanded and formalized by Frobenius into a subject called Representation Theory.[2] Representation Theory is a power tool that allows us to understand abstract structures like groups, by expressing them in more familiar terms like matrices. Which allows us to use different tools like linear algebra. Linear algebra is a primary tool because it is well understood from a mathematical and geometric sense. Thus when we look at structures in linear algebra we can almost always gain some form of insight into some of the behaviors of that group. With representation theory we can build isomorphisms between some very abstract and not well understood structures such as groups or rings to gain insight. For the purpose of this paper we will define multiple representations. We will define these representations by ”mapping” some structure to its representation. This is given in technical language by   This paper we will use a linear algebra to represent our structures. In this paper all representations we are examining group actions which will be described more in depth and rigorously later. There are many other prevalent representations of structures. Some of the most fascinating and useful representations are Lie algebras and Lie groups. However, for now we will stick to examining representations in the forms of matrices and later in the paper we will examine one dimensional representations.  Representation theory allows us to bridge a group theory to application like geometry, physics, and number theory. As a refresher lets define groups and mappings between groups namely, group homomorphisms .    Intro To Represenations A group  is a set together with a binary operation . Where the group axioms below hold:   The binary operation is associative that is for all     The binary operation is closed that is for all We have     there exists an identity element such that for all We have     There exists inverses. For all There exists such that .    There are many unique groups a specific type of group is called an abelian group . We say a group is abelian if the binary operation on the group is commutative. that is for all we have . Group homomorphism are also very important because that is how we define our representations. Let be Groups We say a map is a group homomorphism if the following conditions are met:   The map preserves operations. That is for all      The preserves the identity. that is .   Further if we have a homomorphism that is bijctive call that map an isomorphism . And say that and are isomorphic notated by     Group actions  When we want to represent a group as a transformation we need to describe how groups act on things so we define group actions. A group Action of a group on a set is a map , So we are operating a group times a element in a set (we write that as ) satisfying   associativity: .    identity: .   Also for each there is a unique map from in fact this map is a permutation on when we just look at the action of one element. We can create a map from each element to each permutation. The Set of all permutations on is called this map from is a homomorphism. The Theorm Cayley’s Theorem Is a good connection between groups and this group of permutations on a set  Cayley’s Theorem: Let be a group. Then is isomorphic to a subgroup of     Let where . Then we can show that for a finite group there exists a subgroup of that is isomorphic to that finite group. Let . We show it’s injective beacuse,   We know it’s surjective because we have that . So we shown that is a bijection, so its a valid permutation. We want to show that our map is a homomorphism. We have   So our map is a homomorphism. We can show that the kernel is the identity, If then for all x, this is only true if So the kernel must be the identity. Therefore we can conclude that is injective. Using the FIT, We have that Because We have, Where Will be some subgroup of . So is isomorphic to a subgroup of      What is a representation  In the previous section we discussed how a group can act on a set, allowing the each element to permute the set. What we want is a better way of describing how this concept of a group action works. by using Representations we can represent each element as a linear transformation, allowing us to visualize these group actions, and use tools from linear algebra to analyze these group acting on sets. When we represent the group we want to map the group to a group of linear transformations or a group of matrices; we call this group the general linear group.  The general linear group written as is a group of matrices over some vector field  Finally we have all the tools to define a representation Let be a group a linear representation of G over some representation space  is a group homomorphism , We also say that the degree of is  There exist multiple representations depending on what vector space you space you map them to, and we can sum up these different representations, if we have two representation to respectively we can define The operator will act the same as a direct product when doing finitely many operations. for every vector space we have a representation for . Irreducible representations are important in representation theory, as the theorem above describes. We also can define subrepresentations of a representation. Let be a group and be a vector space such that . If is a subspace of such that for all (also meaning that is stable under ). Then the homomorphism is a subrepresentaion (It is to be observed that ). Lastly we have a way to discribe is two representations are the ”same” We say two representations on the same group namely, and are isomorphic if there exists an isomorphism between the vector spaces that is that commutes with the action of     Characters  Characters are an important tool used in describing representations. Characters allow us to describe a element of a representation as a complex number. Recall from linear algebra the trace of a matrix. Let be a vector space and be a matrix that acts as a linear transformation on if the matrix has entries indexed by We say that the trace of this matrix denoted by is So the trace is the sum along the diagonal of the matrix. Also, this lemma is commonly taught in a linear algebra class Let be a matrix with eigen values We have that  We also obtain this Corollary from that Lemma. Under any change of Basis the trace of the matrix remains the same. Now using this we have the framework to define what a character of a representation is. Let be a Representaion of over the vector field Let defined as  The character allows us to assign a complex value to each linear representation of each element in a group. This comes with very importent properties. Let be a degree representation with character we have that              .    Also in this paper we refer to as the complex conjugate of . We also obtain an interesting property when doing a direct sum of a representation defined in the previous section. Let and let both be representations of a group under different vector spaces and and characters and respectively. The character of the direct sum of the two representations is equal to     Let and We have that the matrix acting on a vector in is That is because our map will map things in and . So from this we have that    We can use charicars to figure out if a representation is irriducable or not the inner product of two functions and on is defined as Orthogonality of charactars:   If is an irreducible representation, then     If and are not isomorphic representations with charactars and respectivly than    Using this we have a method to check for irritability. Characters are very impotent because they assign a single complex value for each transformation, this allows us in some cases to just study the complex values to come to conclusion, And in fact they can tell us all about a representation if we are working with a representation of an abelian group   Representations of Abelian groups  When studying group theory, some of the first group we work with are abelian group because they behave the nicest, and when working with representations of those group we will also learn that this is also the case when it comes to representations of abelian groups. In this Paper we will delve further into the idea of representations specifically when a group is abelian groups, and what these nice properties we can obtain when working with abelian groups. Let be an abelian group and be a representation then all matrices in the in the representation are all diagnosable by the same change of basis.    Since is abelian and that is a homomorphism we have that everything in the image of commutes so we have that all matrices commute that implies they share the same eigen vectors so diagonalize-able by the same change of basis.   This fact is very important and comes with a lot of consequences from that. If is an abelian group and is a representation then the character of this representation is a homomorphism    Let with representations So we have that and commute and are diagonalize by the same change of basis So we have that and we have that We also have that given that and are diagonal matrices. So we have that   So we can see that if is abelian that our character is a homomorphism. That also comes with som implications too If G is abelian and is a representation with character . We have that    is a group    The trace of any matrix in the representation has a non zero value.    Whats also interesting is that given that is a map because is a homomorpmism we have that is a subgroup of If is finite we have that the subgroup will be finite and will be a group built our of roots of unity.   Another relevent lemma is Schur’s lemma Let be an irreducible representation of a finite group If a matrix commutes with for all that is Than that is is a scalar multiple of the identity matrix From that lemma we find that decompose an abelian representation into irreducible representations we find something interesting. All irreducible representations of finite abelian groups are one-dimensional. and in fact those representations are eigen vectors!  An eigen vector  is a vector with a corresponding eigen value  for some matrix such that  For example take some representation we have that every matrix will have the same eigen vectors . we can write our vector space as a direct sum of the eigen spaces (the subspace defined as the span of an eigen vector) for these eigen vectors. We have that If we look at the representation of a single eigen space we learn that each is represented as a scaler multiple on that is the eigen value. can we think of another map that maps from to a number? characters. and actully in this case we have that ! We learned that for any abelian representation we can just break down our representation into multiple characters!    Applications and further directions  Representation theory allows a very concrete bridge from group theory to linear algebra an allows us to apply group theory to application such as:     Fourier Transform A Foruier Transform is nothing just an efficient change of basis from to for .     Quantum information. The single‑qubit Pauli group has four one‑dimensional irreps; measuring in the Pauli‑ , , or basis corresponds to selecting a particular character.     Crystallography. Bravais lattices in with inversion symmetry factor through ; their normal‑mode vibrations (phonons) decompose via the eight characters of that group.       Further Examples   Representations  Now, we will be exploring some unique representations and their uses specifically within the context of abelian groups. We will introduce and derive them from examples and additionally prove that every cyclic group, , has unique one-dimensional representations of the its group action in the form of, We will prove that these representations can be given by the m-th roots of unity which may be intuitive by . This will then be generalized to abelian groups. Within this exploration we will examine this through the lens of other areas of algebra such as invariant theory. Now, let us start with an example of representations which we will keep track of throughout the paper with reference to what we are exploring. We are going to be looking at the representations of . We can observe that will now permute vector spaces by matrix multiplication. Then we can say that Going forward we will examine the abelian cyclic group generated by  Now let us examine some preliminaries that will be necessary for further exploration of the topic. A map acts faithfully if it is an injective homomorphism.[4]A stabilizer is the ”kernel” of group actions. We say for the left acting group on an element is [4]  Two vector spaces are orthogonal if their inner product (generalization of a dot product) is 0.[3]  Any cycle can be represented by a matrix, of that cycles length , within .    Say we have a cycle of length , then as a cycle will permute any element to one and only one element uniquely. Thus for we can give a representation We can permute the identity matrices columns to give a representation of any cycle. This representation will be with by definition. In addition, observe that for we have a homomorphism so the identity maps to the identity.   Now we use something called circulant matrices to represent our cyclic groups and these matrices have some special properties. Circulant Matrix: A matrix where the entries of every next row is the previous row shifted once. Additionally this has the property that the first entry of the matrix makes its entire diagonal, this gives that the trace of the matrix is just . [2] For our permutation matrices there will be a one in every row that is shifted once every row. We will be using this result implicitly for much of this paper.  This is the permutation matrix and can be the generator of a cyclic group. We now introduce new machinery into our representations! Complex numbers, specifically primitive roots, provide very good representations of especially abelian groups. We can start to derive results by examining this next corollary. Every cyclic group has one-dimensional representations. [4]    We will derive our result through examining cyclic groups. Say we have the cyclic group then we will prove that we have a representation of the form   This is in some ways pretty intuitive by introducing the roots of unity. Observe that if the subgroup is cyclic of prime order then it has a generating element such that and being a faithful homomorphism implying that its representation group within will also be cyclic generated by such that . From this we can examine the eigenvalues and vectors of the generating matrix and these will hold for all elements of the group due to it being cyclically generated. Now we need to prove that these eigenvalues will be roots of unity and the eigenvectors will extend this representation. Say for which will imply that for this means that if we have eigenvectors and eigenvalues of this matrix we then have, as the eigenvectors remain directionally invariant. Thus we have and we have a representation as eigenvalues are complex by nature of being a homomorphism and the identity mapping to the identity so then must be generated by the m-th root of unity as solutions to the characteristic polynomial.   Another proof of this lies in this next theorem.  where is the primitive root of unity [2] The proof of this theorem is solely a calculation of the determinant and will thus be excluded. However, we will use this result to show our above corollary once more.   Say we have a permutation matrix that generates a cyclic group, then we will have a circulant matrix where in each row there is precisely one entry which is a one. This gives that the determinant will then be a root of unity and by the fact that is homomorphism the representation is injective. Thus we have a one dimensional representation that is unique.  Say . Observe that it is cyclic. Furthermore, we can observe that this representation is interesting in that it permutes the vector space of any three vector . The eigenvalues of this matrix are given by Thus and then we have eigenvectors which will remain directionally invariant under the are, These eigenvectors span a one-dimensional vector space under these group actions by their eigenvalues. This means that these eigenvalues are one-dimensional representations of the group for their eigenvectors.  Fundamental theorem of abelian groups: Any finite abelian group is a product of cyclic groups of prime order.    Observe that because we have a finite abelian group implies which gives that every subgroup is normal as   Thus all of its Sylow P-subgroups are normal. This gives that we can write the group as a product of its Sylow P-subgroups, Additionally, the order for some prime . From here we take that every has subgroups and all of these subgroups are normal as is abelian. This gives that we can represent the group as a product of its subgroups. However, a subgroups order can only ever divide the order of the group by Lagrange’s theorem. Thus all of the subgroups will inductively have minimal proper subgroups of order . Any group of order is cyclic. This means that the whole group can be written as a product of its minimal subgroups which are cyclic.   This theorem is going to be critical for proving the case of general abelian groups as now we have the ability to see abelian groups through two lenses:    As their product of cyclic groups.    As the character of a matrix and eigenvalues and vectors associated with them.    Both of these are simply different things on a surface level. Computationally, it is easier to use matrices and eigenvalues. Specifically, the characteristic polynomial is very familiar, Generally, this gives us some polynomial of indeterminant that will have solutions in the complex field. However, specifically for permutation matrices we have a correlation where we will generally have eigenvalues of the form for n being the degree of the matrix. Similarly, the eigenvectors will have entries of the same form.  Now, there are a few special things to mention that lead us to the action eigenvalues cause the eigenvectors to be invariant under then forms their stabilizer group. Eigenvectors corresponding to different eigenvalues of a symmetric matrix are orthogonal. Moreover, the eigenvectors span a ”one-dimensional” space which is helpful for simplifying representations. This means that we will have irreducible one dimensional complex representations for any abelian group! Let be an abelian group and a representation of over the complex numbers. If either    is a finite basis     is finitely generated   then dim( )=1  First, lets state all of the preliminaries for this proof   Fundamental theorem of abelian groups: Any finite abelian group is a product of cyclic groups of prime order.    Every cyclic group has one-dimensional representations.   Thus as we have proven it for the cyclic case and then we can use induction to show that it is true for the products of cyclic groups which by the fundamental theorem of finite abelian groups are all abelian groups. Say we have an abelian group generated by cyclic groups of prime order, , then we have, and define then for for . This gives as each of these are roots of unity we know have, for being distinct roots of unity. Now we know that , thus abelian group representations are made of only roots of unity. Observe for distinct roots of unity of prime order their product will be distinct or for being primes, thus as the bottom product is unique, is injective.  Let us examine the abelian permutation group then for , Now all of these permutations are ”swaps” which means that you are only switching two elements with any given permutation. Thus our characteristic polynomial for every element is which gives for the representation uses eigenvalues and eigenvectors of Thus we have our one dimensional representations!  Let us examine the abelian permutation group Then for we have, These matrices may be very efficient in some computer algebra systems but for we lose computational ability pretty rapidly with matrices as they get large, which is why finding one-dimensional representations can be very efficient. For this matrix we can look at the characteristic polynomials to find the representations which gives and These eigenvectors span a one dimensional vector space which allows us to use the eigenvalues as actions. Within this paper we have used a matrix representation of the group action to then use the determinant to calculate eigenvalues and eigenvectors of another representation over a vectors space. We can pretty effectively calculate the eigenvalues of the system by saying the characteristic polynomial of the permutation has roots that are equal to eigenvalues and thus a representation. We run into the issue of how to view the vector space that it acts on. We can make some conclusions by examining the amount of elements being permuted and the disjoint cycles they are in. Then we can transfer this information into the representation of a matrix. From there we can use the eigenvalues to compute the vector space of the representation.       References  [1] Gandini, F. (2019). Ideals of subspace arrangements (Order No. 27614520). . (2352654381). Retrieved from http:\/\/tricountycc.idm.oclc.org\/login?url=https:\/\/www.proquest.com\/dissertations-theses\/ideals-subspace-arrangements\/docview\/2352654381\/se-2. [2] Conrad, Kieth. n.d. The Origin of Representation Theory. Ohio State University, Columbus: Department of Mathematics. [3] Judson, Thomas. 2025. “AATA Finite Abelian Groups.” Ups.edu. http:\/\/abstract.ups.edu\/aata\/struct-section-finite-abelian-groups.html. [4] Gandini, F. (2025). Course Materials for Abstract Algebra II (Galois Theory).   "
},
{
  "id": "ch-representation-theory-4-15-20",
  "level": "2",
  "url": "ch-representation-theory.html#ch-representation-theory-4-15-20",
  "type": "Proof",
  "number": "1.2.1.1",
  "title": "",
  "body": " Let where . Then we can show that for a finite group there exists a subgroup of that is isomorphic to that finite group. Let . We show it’s injective beacuse,   We know it’s surjective because we have that . So we shown that is a bijection, so its a valid permutation. We want to show that our map is a homomorphism. We have   So our map is a homomorphism. We can show that the kernel is the identity, If then for all x, this is only true if So the kernel must be the identity. Therefore we can conclude that is injective. Using the FIT, We have that Because We have, Where Will be some subgroup of . So is isomorphic to a subgroup of   "
},
{
  "id": "ch-representation-theory-4-17-41",
  "level": "2",
  "url": "ch-representation-theory.html#ch-representation-theory-4-17-41",
  "type": "Proof",
  "number": "1.2.3.1",
  "title": "",
  "body": " Let and We have that the matrix acting on a vector in is That is because our map will map things in and . So from this we have that   "
},
{
  "id": "ch-representation-theory-4-18-6",
  "level": "2",
  "url": "ch-representation-theory.html#ch-representation-theory-4-18-6",
  "type": "Proof",
  "number": "1.2.4.1",
  "title": "",
  "body": " Since is abelian and that is a homomorphism we have that everything in the image of commutes so we have that all matrices commute that implies they share the same eigen vectors so diagonalize-able by the same change of basis.  "
},
{
  "id": "ch-representation-theory-4-18-12",
  "level": "2",
  "url": "ch-representation-theory.html#ch-representation-theory-4-18-12",
  "type": "Proof",
  "number": "1.2.4.2",
  "title": "",
  "body": " Let with representations So we have that and commute and are diagonalize by the same change of basis So we have that and we have that We also have that given that and are diagonal matrices. So we have that   So we can see that if is abelian that our character is a homomorphism. That also comes with som implications too If G is abelian and is a representation with character . We have that    is a group    The trace of any matrix in the representation has a non zero value.    Whats also interesting is that given that is a map because is a homomorpmism we have that is a subgroup of If is finite we have that the subgroup will be finite and will be a group built our of roots of unity.  "
},
{
  "id": "ch-representation-theory-5-2-18",
  "level": "2",
  "url": "ch-representation-theory.html#ch-representation-theory-5-2-18",
  "type": "Proof",
  "number": "1.3.1.1",
  "title": "",
  "body": " Say we have a cycle of length , then as a cycle will permute any element to one and only one element uniquely. Thus for we can give a representation We can permute the identity matrices columns to give a representation of any cycle. This representation will be with by definition. In addition, observe that for we have a homomorphism so the identity maps to the identity.  "
},
{
  "id": "ch-representation-theory-5-2-28",
  "level": "2",
  "url": "ch-representation-theory.html#ch-representation-theory-5-2-28",
  "type": "Proof",
  "number": "1.3.1.2",
  "title": "",
  "body": " We will derive our result through examining cyclic groups. Say we have the cyclic group then we will prove that we have a representation of the form   This is in some ways pretty intuitive by introducing the roots of unity. Observe that if the subgroup is cyclic of prime order then it has a generating element such that and being a faithful homomorphism implying that its representation group within will also be cyclic generated by such that . From this we can examine the eigenvalues and vectors of the generating matrix and these will hold for all elements of the group due to it being cyclically generated. Now we need to prove that these eigenvalues will be roots of unity and the eigenvectors will extend this representation. Say for which will imply that for this means that if we have eigenvectors and eigenvalues of this matrix we then have, as the eigenvectors remain directionally invariant. Thus we have and we have a representation as eigenvalues are complex by nature of being a homomorphism and the identity mapping to the identity so then must be generated by the m-th root of unity as solutions to the characteristic polynomial.  "
},
{
  "id": "ch-representation-theory-5-2-34",
  "level": "2",
  "url": "ch-representation-theory.html#ch-representation-theory-5-2-34",
  "type": "Proof",
  "number": "1.3.1.3",
  "title": "",
  "body": " Say we have a permutation matrix that generates a cyclic group, then we will have a circulant matrix where in each row there is precisely one entry which is a one. This gives that the determinant will then be a root of unity and by the fact that is homomorphism the representation is injective. Thus we have a one dimensional representation that is unique.  "
},
{
  "id": "ch-representation-theory-5-2-43",
  "level": "2",
  "url": "ch-representation-theory.html#ch-representation-theory-5-2-43",
  "type": "Proof",
  "number": "1.3.1.4",
  "title": "",
  "body": " Observe that because we have a finite abelian group implies which gives that every subgroup is normal as   Thus all of its Sylow P-subgroups are normal. This gives that we can write the group as a product of its Sylow P-subgroups, Additionally, the order for some prime . From here we take that every has subgroups and all of these subgroups are normal as is abelian. This gives that we can represent the group as a product of its subgroups. However, a subgroups order can only ever divide the order of the group by Lagrange’s theorem. Thus all of the subgroups will inductively have minimal proper subgroups of order . Any group of order is cyclic. This means that the whole group can be written as a product of its minimal subgroups which are cyclic.  "
},
{
  "id": "ch-representation-theory-5-2-53",
  "level": "2",
  "url": "ch-representation-theory.html#ch-representation-theory-5-2-53",
  "type": "Proof",
  "number": "1.3.1.5",
  "title": "",
  "body": " First, lets state all of the preliminaries for this proof   Fundamental theorem of abelian groups: Any finite abelian group is a product of cyclic groups of prime order.    Every cyclic group has one-dimensional representations.   Thus as we have proven it for the cyclic case and then we can use induction to show that it is true for the products of cyclic groups which by the fundamental theorem of finite abelian groups are all abelian groups. Say we have an abelian group generated by cyclic groups of prime order, , then we have, and define then for for . This gives as each of these are roots of unity we know have, for being distinct roots of unity. Now we know that , thus abelian group representations are made of only roots of unity. Observe for distinct roots of unity of prime order their product will be distinct or for being primes, thus as the bottom product is unique, is injective.  "
},
{
  "id": "ch-intro-invariant",
  "level": "1",
  "url": "ch-intro-invariant.html",
  "type": "Chapter",
  "number": "2",
  "title": "A concrete introduction to invariant rings",
  "body": " A concrete introduction to invariant rings   This chapter is co-authored by Francesca Gandini, Al Ashir Intisar, and Sumner Strom. In this chapter we will present an overview of the theory behind the algorithms implemented in the InvariantRing software package in the open-source Computer Algebra System Macaulay2 (M2) .  You can access an online version of this chapter with live code cell at . There you can also learn how to set up a virtual machine on Github with Codespaces so that you write and run M2 code from anywhere. A turn-key repository for creating a Codespace for Macaulay2 is available at fragandi\/M2-codespace .  We also include some background on orbit sums necessary to implement an algorithm to compute invariants for permutations actions. We have worked with a group of collaborators on the first version of the code for this algorithm at the Macaulay2 Workshop at Tulane University in April 2025 and plan to further test it and release it with Macaulay2 in Fall 2025.  We finish the chapter with a selection of examples that illustrate the current capabilities of the InvariantRing package. You can run the provided code in your local installation of M2 or go to the online version and execute the code cells on your browser. This works well even on mobile devices!    A concrete introduction to invariant rings     Finite Matrix Groups  We can think of a (linear) action within a group as acting on a vector space concretely by interpreting each group element as a matrix and describing the action as matrix multiplication on vectors. We can then evaluate any polynomial on a vector space of its indeterminants and its image after the group action.   Consider and the vector This gives . Thus for the polynomial and we have, .   More formally, for a finite group we will consider a linear representation of via its action on a finite dimensional vector space over a field of characteristics zero. In general, most of the results in this chapter hold in the non-modular case i.e., when the characteristics of the field does not divide the order of the group. As of now finite fields are not fully supported by the current version of the InvariantRing package and such functionalities are an active area of development.  If is faithful representation of of dimension , the image of the representation is isomorphic to and so we consider as a finite matrix group .  Suppose and , then is a finite matrix group.    Let us consider a two-dimesional representation of , the cyclic group of order 2.      Invariant Rings  We will work with a polynomial ring in variables over the field . We use the notation and abuse it by saying and for .   Let be a finite matrix group within . We say that is invariant under the action of if and only if for all .   The polynomials and in are invariant under the action of However the polynoial is not.   We can consider the set of all invariant polynomials under some action of a group . A good exercise is to prove that this set has the structure of a ring.  Let . We define the invariant ring for the action of on as,     Reynolds Operator  We have that the invariant ring is a subring of the ring . However, it is not an ordinary subring. In characteristic zero, we have a projection from to that respects the action of . The idea: \"averaging\" over the action of we get an invariant polynomial.   The Reynolds map (averaging map) is given by     Example for a Group action . Consider the polynomial , which is not invariant under the action of . We have that: and we can check that is indeed invariant.     "
},
{
  "id": "subsec-finite-matrix-groups-3",
  "level": "2",
  "url": "ch-intro-invariant.html#subsec-finite-matrix-groups-3",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": " Consider and the vector This gives . Thus for the polynomial and we have, .  "
},
{
  "id": "subsec-finite-matrix-groups-5",
  "level": "2",
  "url": "ch-intro-invariant.html#subsec-finite-matrix-groups-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix group "
},
{
  "id": "subsec-finite-matrix-groups-6",
  "level": "2",
  "url": "ch-intro-invariant.html#subsec-finite-matrix-groups-6",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "Suppose and , then is a finite matrix group.  "
},
{
  "id": "subsec-finite-matrix-groups-7",
  "level": "2",
  "url": "ch-intro-invariant.html#subsec-finite-matrix-groups-7",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": " Let us consider a two-dimesional representation of , the cyclic group of order 2.   "
},
{
  "id": "subsec-invariant-rings-3",
  "level": "2",
  "url": "ch-intro-invariant.html#subsec-invariant-rings-3",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": " Let be a finite matrix group within . We say that is invariant under the action of if and only if for all . "
},
{
  "id": "subsec-invariant-rings-4",
  "level": "2",
  "url": "ch-intro-invariant.html#subsec-invariant-rings-4",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": " The polynomials and in are invariant under the action of However the polynoial is not.  "
},
{
  "id": "subsec-invariant-rings-6",
  "level": "2",
  "url": "ch-intro-invariant.html#subsec-invariant-rings-6",
  "type": "Definition",
  "number": "2.1.6",
  "title": "",
  "body": "Let . We define the invariant ring for the action of on as,  "
},
{
  "id": "subsec-reynolds-operator-2",
  "level": "2",
  "url": "ch-intro-invariant.html#subsec-reynolds-operator-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projection "
},
{
  "id": "subsec-reynolds-operator-3",
  "level": "2",
  "url": "ch-intro-invariant.html#subsec-reynolds-operator-3",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": " The Reynolds map (averaging map) is given by   "
},
{
  "id": "subsec-reynolds-operator-4",
  "level": "2",
  "url": "ch-intro-invariant.html#subsec-reynolds-operator-4",
  "type": "Example",
  "number": "2.1.8",
  "title": "",
  "body": " Example for a Group action . Consider the polynomial , which is not invariant under the action of . We have that: and we can check that is indeed invariant.  "
},
{
  "id": "ch-algorithms",
  "level": "1",
  "url": "ch-algorithms.html",
  "type": "Chapter",
  "number": "3",
  "title": "Degree Bounds and Algorithms",
  "body": " Degree Bounds and Algorithms    Our goal is to find algorithms that provide us with a description of all possible invariants in an efficient way. Formally, we look for minimal generators for the ring of invariants and more precisely for minimal algebra generators for as an algebra over the coefficient field .  For our search to be successful, we need to hope that there are finitely many generators. In our setup (finite groups and characteristic zero) a consequence of Hilbert's Basis Theorem is that our invariant rings are finitely generated. However, we will run in computational troubles if we do not have a stopping point for our search. The most effective way is to provide a bound the degrees of these generators.    Noether Degree Bound  A beautiful theorem of Noether establishes that we have a bound on the degree of a minimal generator independent from the action itself, but just in terms of the order of the group. Moreover, we only need to look at images of monomials under the Reynolds operator.  The Noether Degree Bound claims a ring of invariants is generated in degrees giving,     Noether's result is a constructive tool that provides us with a computational strategy! We can apply to all the finitely many monomials in degrees to get generators for . As the number of monomials grows exponentially with the number of variables and the degree, this is more of a theoretical algorithm, but it does tell us that our goal is at least possible!    Hilbert Ideal  To describe a more sophisticated approach to the search for minimal algebra generators for an invariant ring, we can actually consider an ideal instead! Note: for any , the ideal generatd by and the subalgebra generated by over are very different objects.   Let be the ideal in generated by all positive degree invariants. We call the Hilbert Ideal for this action of .   Let be the Hilbert ideal in for the action of . If and every is invariant so , then   Note that the condition that every generator is invariant is not hard to satisfy as if you have a generator that is not invariant, then you can apply the Reynolds operator to obtain a new generator that is. You can now replace the old generator with this new one and still get the same ideal. What is special here is that a set of ideal generators work as algebra generators! Computationally, algebra generators are much harder to find as there is no guarantee to have finitely many of them. However, the Hilbert Basis Theorem tells us that every ideal is finitely generated.    Presentations  When we say that are minimal generators for a subring , we do not exclude the possibility that there is some relation, some polynomial identity, that they satisfy as elements in the bigger ring . We can describe the relations between the generators via a presentation of the subring.   Let . A presentation of is a map, such that . We call the elements of the presentation ideal the syzygies of 's.   Algorithms for finding generators for ideals have been intensely studied and especially in relation with the theory of Groebener bases. We cannot go in the details of these tools, but what is of notice is that they are implemented in Macaulay2 and so we can rely on them in our implementation. In particular, these methods are particularly effective in solving problems in Elimnination Theory. Often the goal is to compute an ideal of relations hoping that this is less complicated than the original structure, possibly elimnating some variables.  (Elimination Theory): In consider the ideal, Then,   Compute a Groebner Basis for with elimination order for the 's. Then, is the Groebner Basis for     Graph of Linear Actions  We can use Elimination Theory to solve our original problem of finding minimal generators for the ring of invariants. We first need to construct a geometric description of the action of a group .   Let be a finite matrix group in . For consider, Then is the subspace arrangement associated to the action of G.  Note that is a linear subspace. So , the set of polynomials vanishing on , is an ideal generated by linear polynomials, we call this a linear ideal .   Consider      Subspace Arrangement Approach  The finite union of the subspaces , denoted is a subspace arrangement, called the group action arrangement . Via Elimination Theory, we can use the vanishing ideal of to recover the Hilbert Ideal.  (Derksen): Let Then    Recent work has shown that the same approach works in the exterior algebra.   (Gandini) Let . Then    The exterior algebra approach has computational potential. Whilst Derken's approach leads to an algorithm with a long run time, first experiments suggest that a fast algorithm could be implemented for skew polynomials. We aim to pursue this line of inquiry in the near future.     Specialized algorithms   For some specific types of actions we have faster and simpler algorithms to find invariants.    Abelian Groups and Weight Matrices  Every abelian group can be written in its invariant factors decomposition as for some unique such that where . In multiplicative notation, A diagonal action of on is given by for a primitive root of unity. We can encod the action in the weight matrix where the rows are indexed by the generators of and the columns are indexed by the variables of .  A monomial is invariant under the action of if an only if its exponent vector is in the kernel of the weigtht matrix . In symbols, where the entry in position is computed modulo .   Interpreting each row has the weight of the action of the generator , we have that acts trivially on the monomial precisely when so modulo as is a primitve root of unity.  We can use this result computationally. As the action is diagonal, the invariant ring is generated by monomials. By Noether Degree Bound we only need to examine all monomials of degree less than the order of the group . Then, by the theorem above, if we can sort the monomials in terms of their weigtht , then the monomials with weight will be invariant.    "
},
{
  "id": "ch-algorithms-2-1-1",
  "level": "2",
  "url": "ch-algorithms.html#ch-algorithms-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimal generators "
},
{
  "id": "subsec-noether-degree-bound-3",
  "level": "2",
  "url": "ch-algorithms.html#subsec-noether-degree-bound-3",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "",
  "body": "The Noether Degree Bound claims a ring of invariants is generated in degrees giving,  "
},
{
  "id": "subsec-hilbert-ideal-3",
  "level": "2",
  "url": "ch-algorithms.html#subsec-hilbert-ideal-3",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": " Let be the ideal in generated by all positive degree invariants. We call the Hilbert Ideal for this action of .  "
},
{
  "id": "subsec-hilbert-ideal-4",
  "level": "2",
  "url": "ch-algorithms.html#subsec-hilbert-ideal-4",
  "type": "Theorem",
  "number": "3.1.3",
  "title": "",
  "body": "Let be the Hilbert ideal in for the action of . If and every is invariant so , then  "
},
{
  "id": "subsec-presentations-2",
  "level": "2",
  "url": "ch-algorithms.html#subsec-presentations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "presentation "
},
{
  "id": "subsec-presentations-3",
  "level": "2",
  "url": "ch-algorithms.html#subsec-presentations-3",
  "type": "Definition",
  "number": "3.1.4",
  "title": "",
  "body": " Let . A presentation of is a map, such that . We call the elements of the presentation ideal the syzygies of 's.  "
},
{
  "id": "subsec-presentations-5",
  "level": "2",
  "url": "ch-algorithms.html#subsec-presentations-5",
  "type": "Proposition",
  "number": "3.1.5",
  "title": "",
  "body": "(Elimination Theory): In consider the ideal, Then,  "
},
{
  "id": "subsec-presentations-6",
  "level": "2",
  "url": "ch-algorithms.html#subsec-presentations-6",
  "type": "Algorithm",
  "number": "3.1.6",
  "title": "",
  "body": "Compute a Groebner Basis for with elimination order for the 's. Then, is the Groebner Basis for  "
},
{
  "id": "subsec-graph-of-linear-actions-3",
  "level": "2",
  "url": "ch-algorithms.html#subsec-graph-of-linear-actions-3",
  "type": "Definition",
  "number": "3.1.7",
  "title": "",
  "body": " Let be a finite matrix group in . For consider, Then is the subspace arrangement associated to the action of G. "
},
{
  "id": "subsec-graph-of-linear-actions-4",
  "level": "2",
  "url": "ch-algorithms.html#subsec-graph-of-linear-actions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear ideal "
},
{
  "id": "subsec-graph-of-linear-actions-5",
  "level": "2",
  "url": "ch-algorithms.html#subsec-graph-of-linear-actions-5",
  "type": "Example",
  "number": "3.1.8",
  "title": "",
  "body": " Consider   "
},
{
  "id": "subsec-subspace-arrangement-approach-2",
  "level": "2",
  "url": "ch-algorithms.html#subsec-subspace-arrangement-approach-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "group action arrangement "
},
{
  "id": "subsec-subspace-arrangement-approach-3",
  "level": "2",
  "url": "ch-algorithms.html#subsec-subspace-arrangement-approach-3",
  "type": "Theorem",
  "number": "3.1.9",
  "title": "",
  "body": "(Derksen): Let Then   "
},
{
  "id": "subsec-subspace-arrangement-approach-5-1",
  "level": "2",
  "url": "ch-algorithms.html#subsec-subspace-arrangement-approach-5-1",
  "type": "Theorem",
  "number": "3.1.10",
  "title": "",
  "body": "(Gandini) Let . Then  "
},
{
  "id": "subsec-AGWM-3",
  "level": "2",
  "url": "ch-algorithms.html#subsec-AGWM-3",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "",
  "body": "A monomial is invariant under the action of if an only if its exponent vector is in the kernel of the weigtht matrix . In symbols, where the entry in position is computed modulo .  "
},
{
  "id": "ch-permutation-actions",
  "level": "1",
  "url": "ch-permutation-actions.html",
  "type": "Chapter",
  "number": "4",
  "title": "Permutation actions",
  "body": " Permutation actions   The symmetric group acts naturally on by permuting its elements. This action allows us to define a representation where on the basis vectors , the permutation acts by . As acts on by permuting its basis vectors, we have that is a permutation representation induced by the permutation action of .   Consider the group . The matrix for the action of is given by and then we have it acting on a vector by matrix multiplication,    Now consider the action of the symmetric group on the polynomial ring . The symmetric polynomials are the invariant polynomials under this action..    We call , a symmetric polynomial if for all permutations of .    An example of symmetric polynomials is given by the elementary symmetric polynomials .    The elementary symmetric polynomials in are defined by with .    More generally, we can consider a permutation action by some subgroup of . For any monomial in , we can consider its orbit under the action of .    The of any element is .    Any permutation in acts on the orbit by rearranging its elements. As a result, the orbit sums will give us invariant polynomials.    The orbit sum of the sum of over the elements of .    We can find a set of minimal invariants by computing all orbit sums of all monomials of degree . But this is computationally expensive and will lead to a lot of redundant computations. Instead, we will use a result that tells us that we only need to compute the orbit sums of some special monomials. Consider the exponent sequence of a monomial and rearrange it to obtain an integer partition , where     We call a monomial special if the entries in its associated partition decrease by at most one at each step and the last entry is 0.    The definition of special depends on the number of variables or the number of parts in the integer partition. So would not be special within , but it is special in .    (Göbel) Let be a permutation representation of a finite group acting on . Then the ring of invariants is generated as an algebra by the top elementary symmetric function and the orbit sum of the special monomials.      (Göbel's Bound) In a permutation representation of dimension at least 3, the degree of a minimal generating invariant is at most .    We have that the bound follows from the theorem as the degree of a special momial is at most and this is larger than , the degree of , when .  To show that orbits of special monomial generate the ring of invariants, one needs to consider a reduction argument. If you start with a non-special monomial, the entries of its partition are not decreasing by at most 1 and we call the first place where there is a jump a in the partition. Starting from a non-special monomial we can obtain a reduced monomial by decreasing all the largest exponents up to the gap by one. The reduced monomial will be closer to being special as the gap itself will be reduced by 1.  In the ring we have the non-special monomial . The gap occurs at the second entry of the partition so the reduction would give us and produced a special monomial.  Algorithmically, we can reduce any monomial to a special one by reducing the upper degrees repeatedly until the monomial is special. So the general idea of the proof of Gobel's theorem is to show that the orbit sum of any monomial can be rewritten as a sum of orbit sums of special monomials or special monomials times some power of . In our ongoing work we are using Gobel's theorem as a tool for reducing the complexity of computing invariants for permutation actions.   "
},
{
  "id": "ch-permutation-actions-2-2",
  "level": "2",
  "url": "ch-permutation-actions.html#ch-permutation-actions-2-2",
  "type": "Example",
  "number": "4.1.1",
  "title": "",
  "body": " Consider the group . The matrix for the action of is given by and then we have it acting on a vector by matrix multiplication,   "
},
{
  "id": "def-symmetricpolynomial",
  "level": "2",
  "url": "ch-permutation-actions.html#def-symmetricpolynomial",
  "type": "Definition",
  "number": "4.1.2",
  "title": "",
  "body": "  We call , a symmetric polynomial if for all permutations of .   "
},
{
  "id": "ch-permutation-actions-2-5",
  "level": "2",
  "url": "ch-permutation-actions.html#ch-permutation-actions-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary symmetric polynomials "
},
{
  "id": "def-elemsymm",
  "level": "2",
  "url": "ch-permutation-actions.html#def-elemsymm",
  "type": "Definition",
  "number": "4.1.3",
  "title": "",
  "body": "  The elementary symmetric polynomials in are defined by with .   "
},
{
  "id": "def-orbit",
  "level": "2",
  "url": "ch-permutation-actions.html#def-orbit",
  "type": "Definition",
  "number": "4.1.4",
  "title": "",
  "body": "  The of any element is .   "
},
{
  "id": "def-orbitsum",
  "level": "2",
  "url": "ch-permutation-actions.html#def-orbitsum",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": "  The orbit sum of the sum of over the elements of .   "
},
{
  "id": "def-specialmonomials",
  "level": "2",
  "url": "ch-permutation-actions.html#def-specialmonomials",
  "type": "Definition",
  "number": "4.1.6",
  "title": "",
  "body": "  We call a monomial special if the entries in its associated partition decrease by at most one at each step and the last entry is 0.   "
},
{
  "id": "thm-gobel",
  "level": "2",
  "url": "ch-permutation-actions.html#thm-gobel",
  "type": "Theorem",
  "number": "4.1.7",
  "title": "",
  "body": "  (Göbel) Let be a permutation representation of a finite group acting on . Then the ring of invariants is generated as an algebra by the top elementary symmetric function and the orbit sum of the special monomials.   "
},
{
  "id": "cor-gobel",
  "level": "2",
  "url": "ch-permutation-actions.html#cor-gobel",
  "type": "Corollary",
  "number": "4.1.8",
  "title": "",
  "body": "  (Göbel's Bound) In a permutation representation of dimension at least 3, the degree of a minimal generating invariant is at most .   "
},
{
  "id": "ch-permutation-actions-2-18",
  "level": "2",
  "url": "ch-permutation-actions.html#ch-permutation-actions-2-18",
  "type": "Example",
  "number": "4.1.9",
  "title": "",
  "body": "In the ring we have the non-special monomial . The gap occurs at the second entry of the partition so the reduction would give us and produced a special monomial. "
},
{
  "id": "ch-groebner-basis",
  "level": "1",
  "url": "ch-groebner-basis.html",
  "type": "Chapter",
  "number": "5",
  "title": "Gröbner Basis",
  "body": " Gröbner Basis   hello   "
},
{
  "id": "ch-skew-invariants",
  "level": "1",
  "url": "ch-skew-invariants.html",
  "type": "Chapter",
  "number": "6",
  "title": "Skew Invariant Theory",
  "body": " Skew Invariant Theory    "
},
{
  "id": "ax-related",
  "level": "1",
  "url": "ax-related.html",
  "type": "Appendix",
  "number": "A",
  "title": "Additional Reading",
  "body": " Additional Reading      Version Control with Git      Programming with Python      "
},
{
  "id": "ax-additional-topics",
  "level": "1",
  "url": "ax-additional-topics.html",
  "type": "Appendix",
  "number": "B",
  "title": "Additional Topics",
  "body": " Additional Topics   GitHub Desktop  TODO    VS Code Application  TODO    Using the Terminal  TODO   "
},
{
  "id": "ax-defs-notes",
  "level": "1",
  "url": "ax-defs-notes.html",
  "type": "Appendix",
  "number": "C",
  "title": "Definitions and Notes Quick Ref",
  "body": " Definitions and Notes Quick Ref   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
