describe("visual grammar parser", function() {
	beforeEach( function() {
		this.renderer = new TrivialRenderer();
		this.parser = new GrammarParser();
		loadFixtures('renderer.html');
	});

	it('should exist', function() {
		expect( this.parser ).toBeDefined();
	});

	it('should have a canvas element with id renderTarget', function() {
		expect( $('#renderTarget' )).toExist();
		expect( $('#renderTarget').tagName() ).toEqual('CANVAS');
	});

	it('should accept a string as the input of a grammar', function() {
		this.parser.setString(fixtures.trivialGrammar);
		expect(this.parser.grammarString).toEqual( fixtures.trivialGrammar );
	});

	it('should accept a renderer object', function() {
		this.parser.setRenderer( this.renderer );
		expect( this.parser.renderer ).toEqual( this.renderer );
	});

	it('should execute the grammar parsing', function() {
		this.parser.setString(fixtures.trivialGrammar);
		this.parser.parse();
	});
});

describe("trivial renderer", function() {
	beforeEach( function() {
		this.renderer = new TrivialRenderer();
	});

	it('should exist', function() {
		expect( this.renderer ).toBeDefined();
	});

	it('should implement functions to render the symbols a, A, b, and B', function() {
		expect( this.renderer.a ).toBeDefined();
		expect( this.renderer.A ).toBeDefined();
		expect( this.renderer.b ).toBeDefined();
		expect( this.renderer.B ).toBeDefined();
	});
});