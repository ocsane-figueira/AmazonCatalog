package com.projeto.amazon_catalog.controller;

import com.projeto.amazon_catalog.model.Animal;
import com.projeto.amazon_catalog.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/animal")
public class AnimalController {

    @Autowired
    private AnimalRepository animalRepository;

    @GetMapping(value = "/")
    public List<Animal> getAllAnimal() {
        return animalRepository.findAll();
    }

    @PostMapping(value = "/", consumes = "application/json", produces = "application/json")
    public Animal createAnimal(@RequestBody Animal animal) {
        return animalRepository.save(animal);
    }

    @GetMapping("/{id}")
    public Animal getAnimalById(@PathVariable Long id) {
        return animalRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Animal not found with id " + id));
    }

    @PutMapping(value = "/{id}", consumes = "application/json", produces = "application/json")
    public Animal updateAnimal(@PathVariable Long id, @RequestBody Animal animalDetails) {
        Animal animal = animalRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Animal not found with id " + id));

        animal.setName(animalDetails.getName());
        animal.setTitle(animalDetails.getTitle());
        animal.setDescription(animalDetails.getDescription());
        animal.setUriImage(animalDetails.getUriImage());

        return animalRepository.save(animal);
    }

    @DeleteMapping("/{id}")
    public String deleteAnimal(@PathVariable Long id) {
        Animal animal = animalRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Animal not found with id " + id));

        animalRepository.delete(animal);
        return "Animal with id " + id + " deleted successfully";
    }
}