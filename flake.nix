{
  description = "Konvertiere die .realm Dateien, welche wir von Corsano bekommen in JSON um.";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils = {
      inputs.nixpkgs.follows = "nixpkgs";
      url = "github:numtide/flake-utils";
    };
  };

  outputs = { self, nixpkgs, flake-utils, ... }@inputs:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
        rec {
          devShells.default = pkgs.mkShell {
            buildInputs = with pkgs; [
              nodejs
              yarn
            ];
          };
        }
      );
}
